'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
// import { createClient } from '@/utils/supabase/client'

export async function login(formData) {
    const supabase = createClient()
    // console.log("formData", formData)

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email'),
        password: formData.get('current-password'),
    }

    const { error } = await supabase.auth.signInWithPassword(data)
    console.log("error", error)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}
