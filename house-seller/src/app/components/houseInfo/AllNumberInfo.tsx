export default function AllNumberInfo() {
    return(
        <div>
            <section className="flex flex-row items-center justify-between">
                <section className="flex flex-col">
                    <p>Sagsnummer:</p>
                    <p>Boligareal:</p>
                    <p>Grundareal:</p>
                    <p>Rum/værelser:</p>
                    <p>Antal Plan:</p>
                </section>
                <section className="flex flex-col">
                    <p>Kælder:</p>
                    <p>Byggeår:</p>
                    <p>Ombygget:</p>
                    <p>Energimærke</p>
                </section>
                <section className="flex flex-col">
                    <p>udbetaing:</p>
                    <p>Brutto ex ejerudgift:</p>
                    <p>Netto ex ejerudgift:</p>
                    <p>Ejerudgifter:</p>
                </section>
            </section>
        </div>
    )
}