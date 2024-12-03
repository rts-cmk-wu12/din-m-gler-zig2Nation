export default function AllNumberInfo({ payment, id, livingspace, lotsize, rooms, basementsize, built, remodel, energylabel, netto, gross, cost}: { 
    payment: number; 
    id: number | string; 
    livingspace: number;
    lotsize: number;
    rooms: number | string;
    basementsize: number;
    built: number;
    remodel: number;
    energylabel: string;
    gross: number;
    netto: number;
    cost: number;
  }) {
    return(
        <div>
            <section className="flex flex-row items-center justify-between">
                <section className="flex flex-row gap-[3em]">
                    <div>
                        <p>Sagsnummer: </p>
                        <p>Boligareal: </p>
                        <p>Grundareal: </p>
                        <p>Rum/værelser: </p>
                        <p>Antal Plan:</p>
                    </div>
                    <div>
                        <p>{id}</p>
                        <p>{livingspace} m²</p>
                        <p>{lotsize} m²</p>
                        <p>{rooms}</p>
                        <p></p>
                    </div>
                </section>
                <section className="flex flex-row gap-[3em]">
                    <div>
                        <p>Kælder: </p>
                        <p>Byggeår: </p>
                        <p>Ombygget: </p>
                        <p>Energimærke </p>
                    </div>
                    <div>
                        <p>{basementsize}</p>
                        <p>{built}</p>
                        <p>{remodel}</p>
                        <p>{energylabel}</p>
                    </div>
                </section>
                <section className="flex flex-row gap-[3em]">
                    <div>
                        <p>udbetaing:</p>
                        <p>Brutto ex ejerudgift:</p>
                        <p>Netto ex ejerudgift:</p>
                        <p>Ejerudgifter:</p>
                    </div>
                    <div>
                        <p>kr {payment.toLocaleString()}</p>
                        <p>kr {gross.toLocaleString()}</p>
                        <p>kr {netto.toLocaleString()}</p>
                        <p>kr {cost.toLocaleString()}</p>
                    </div>
                </section>
            </section>
        </div>
    )
}