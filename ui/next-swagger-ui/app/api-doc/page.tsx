import { getApiDocs } from "@/lib/swagger"

import ReactSwagger from "./react-swagger"

export default async function IndexPage() {
    const url = '/docs/api.yaml'
    return (
        <section className="container">
            <ReactSwagger url={url} />
        </section>
    )}