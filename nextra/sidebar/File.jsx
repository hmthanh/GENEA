import { useMenu } from "@/contexts/menu"
import { useContext } from "react"
import { Separator } from "./separator"
import { Anchor } from "@/nextra/anchor"
import cn from "clsx"

export function File({ item, anchors }) {
  // const route = useFSRoute()
  const onFocus = useContext(OnFocusItemContext)

  // It is possible that the item doesn't have any route - for example an external link.
  // const active = item.route && [route, route + "/"].includes(item.route + "/")
  // const activeAnchor = useActiveAnchor()
  const { setMenu } = useMenu()

  if (item.type === "separator") {
    return <Separator title={item.title} />
  }

  return (
    <li className={cn(classes.list, { active })}>
      <Anchor
        href={item.href || item.route}
        newWindow={item.newWindow}
        className={cn(classes.link, active ? classes.active : classes.inactive)}
        onClick={() => {
          setMenu(false)
        }}
        onFocus={() => {
          onFocus?.(item.route)
        }}
        onBlur={() => {
          onFocus?.(null)
        }}
      >
        {item.title}
      </Anchor>
      {active && anchors.length > 0 && (
        <ul className={cn(classes.list, classes.border, "ltr:ml-3 rtl:mr-3")}>
          {anchors.map(({ id, value }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  classes.link,
                  'flex gap-2 before:opacity-25 before:content-["#"]',
                  activeAnchor[id]?.isActive ? classes.active : classes.inactive
                )}
                onClick={() => {
                  setMenu(false)
                }}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
