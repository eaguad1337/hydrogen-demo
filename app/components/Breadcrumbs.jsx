import { useMatches } from "@remix-run/react"


export function Breadcrumbs() {
    const matches = useMatches();
    console.log(matches)

    return <div>Breadcrumbs</div>

}