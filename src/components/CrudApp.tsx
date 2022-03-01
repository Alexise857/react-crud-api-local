import React, {useState} from 'react';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andrómeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
    },
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState<any>(null);

    const createData = (data: any) => {
        setDb([...db, {...data, id: Date.now() }])
    }

    const updateData = (data: any) => {
        const newDB = [...db].map( el => el.id === data?.id ? {...data} : {...el} )
        setDb(newDB)
    }

    const deleteData = (id: any) => {
        const isDelete = window.confirm('Seguro?')
        console.log({isDelete})
        if (isDelete) {
            const newDbDeleted = db.filter( el => el.id !== id )
            setDb(newDbDeleted)
            console.log({newDbDeleted})
        }
    }

    return (
        <div>
            <h2>CRUD APP</h2>
            <article className="grid1-2">
                <CrudForm createData={createData}
                          updateData={updateData}
                          dataToEdit={dataToEdit}
                          setDataToEdit={setDataToEdit}
                />
                <CrudTable data={db}
                           setDataToEdit={setDataToEdit}
                           deleteData={deleteData} />
            </article>

        </div>
    );
};

export default CrudApp;
