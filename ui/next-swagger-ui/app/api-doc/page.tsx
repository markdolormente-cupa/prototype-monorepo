import ReactSwagger from "./react-swagger"

export default async function IndexPage() {
    const url = `http://localhost:3000/docs/api`;
    return (
        <section className="container">
            <ReactSwagger url={url} />
        </section>
    )}