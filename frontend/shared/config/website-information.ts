interface Owner {
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

interface Company {
    companyName: string;
    businessName: string;
    siren: string;
    rcs: string;
    address: string;
    vat: string;
}

interface Host {
    name: string;
    companyName: string;
    address: string;
    phone: string;
    email: string;
}

export interface WebsiteInformations {
    url: string;
    owner: Owner;
    company: Company;
    host: Host;
}

const WEBSITE_DATA: WebsiteInformations = {
    url: 'https://bushiweb.dev',

    owner: {
        fullName: 'Francisod Emeric',
        email: 'epf@bushiweb.dev',
        phone: '06 42 08 64 21',
        address: '152 route de Chartreuse, 38700 Corenc, France',
    },

    company: {
        companyName: 'EI Francisod Emeric',
        businessName: 'BushiWeb',
        siren: '840 044 259',
        rcs: '840 044 259 R.C.S. Grenoble',
        address: '152 route de Chartreuse, 38700 Corenc, France',
        vat: 'TVA non applicable, art. 293 B du CGI',
    },

    host: {
        name: 'IONOS',
        companyName: 'IONOS SARL',
        address:
            '7 place de la Gare, BP 70109, 57200 Sarreguemines Cedex, France',
        phone: '09 70 80 89 11',
        email: 'ionos@ionos.fr',
    },
};

export default WEBSITE_DATA;
