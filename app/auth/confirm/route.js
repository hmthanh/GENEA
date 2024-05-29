export const runtime = 'edge';

import { createClient } from '@/utils/supabase/server'
// import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    console.log("searchParams", searchParams)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type')
    const next = searchParams.get('next') ?? '/'

    const redirectTo = request.nextUrl.clone()
    redirectTo.pathname = next
    redirectTo.searchParams.delete('token_hash')
    redirectTo.searchParams.delete('type')

    if (token_hash && type) {
        const supabase = createClient()

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        })
        if (!error) {
            redirectTo.searchParams.delete('next')
            return redirect(redirectTo)
        }
    }

    // return the user to an error page with some instructions
    redirectTo.pathname = '/error'
    return redirect(redirectTo)
}