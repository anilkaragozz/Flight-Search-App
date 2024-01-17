import { Menubar } from 'primereact/menubar';


export const Navbar = () => {

    const items = [
        {
            label: 'Anasayfa',
            icon: 'pi pi-home'
        },
        {
            label: 'Uçuş Ara',
            icon: 'pi pi-send'
        },
        {
            label: 'Bize Ulaş',
            icon: 'pi pi-envelope'
        }
    ];

    return (
        <Menubar model={items} className="bg-gradient-to-r from-cobalt-100 to-cobalt-400 h-32 rounded-none flex justify-center items-center mb-8" />
    )
}