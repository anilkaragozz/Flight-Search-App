import { Menubar } from 'primereact/menubar';


export const Navbar = () => {

    const items = [
        {
            label: 'Bize Ulaş',
            icon: 'pi pi-envelope'
        }
    ];

    return (
        <Menubar model={items} className="bg-transparent h-32 mb-8 flex justify-end" />
    )
}