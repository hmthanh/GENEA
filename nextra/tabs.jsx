import { Tab as HeadlessTab } from '@headlessui/react'
import cn from 'clsx'
import { useCallback, useEffect, useState } from 'react'


function isTabObjectItem(item) {
  return !!item && 'label' in item
}

function Tabs({
  items,
  selectedIndex: selectedIndex,
  defaultIndex = 0,
  onChange,
  children,
  storageKey
}) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex)

  useEffect(() => {
    if (selectedIndex !== undefined) {
      setSelectedIndex(selectedIndex)
    }
  }, [selectedIndex])

  useEffect(() => {
    if (!storageKey) {
      // Do not listen storage events if there is no storage key
      return
    }

    function fn(event) {
      if (event.key === storageKey) {
        setSelectedIndex(Number(event.newValue))
      }
    }

    const index = Number(localStorage.getItem(storageKey))
    setSelectedIndex(Number.isNaN(index) ? 0 : index)

    window.addEventListener('storage', fn)
    return () => {
      window.removeEventListener('storage', fn)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps -- only on mount

  const handleChange = useCallback((index) => {
    if (storageKey) {
      const newValue = String(index)
      localStorage.setItem(storageKey, newValue)

      // the storage event only get picked up (by the listener) if the localStorage was changed in
      // another browser's tab/window (of the same app), but not within the context of the current tab.
      window.dispatchEvent(
        new StorageEvent('storage', { key: storageKey, newValue })
      )
      return
    }
    setSelectedIndex(index)
    onChange?.(index)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps -- only on mount

  return (
    <HeadlessTab.Group
      selectedIndex={selectedIndex}
      defaultIndex={defaultIndex}
      onChange={handleChange}
    >
      <div className="nextra-scrollbar overflow-x-auto overflow-y-hidden overscroll-x-contain">
        <HeadlessTab.List className="mt-4 flex w-max min-w-full border-b border-gray-200 pb-px dark:border-neutral-800">
          {items.map((item, index) => {
            const disabled = isTabObjectItem(item) && item.disabled
            return (
              <HeadlessTab
                key={index}
                disabled={disabled}
                className={({ selected }) =>
                  cn(
                    'mr-2 rounded-t p-2 font-medium leading-5 transition-colors',
                    '-mb-0.5 select-none border-b-2',
                    selected
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white',
                    disabled &&
                    'pointer-events-none text-gray-400 dark:text-neutral-600'
                  )
                }
              >
                {isTabObjectItem(item) ? item.label : item}
              </HeadlessTab>
            )
          })}
        </HeadlessTab.List>
      </div>
      <HeadlessTab.Panels>{children}</HeadlessTab.Panels>
    </HeadlessTab.Group>
  )
}

function Tab({
  children,
  ...props
}) {
  return (
    <HeadlessTab.Panel {...props} className="rounded pt-6">
      {children}
    </HeadlessTab.Panel>
  )
}

export const Tabs = Object.assign(Tabs, { displayName: 'Tabs', Tab })
