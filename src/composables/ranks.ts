// import { Rank } from '@/models/Rank';

export function useRankService() {
    return {
        list() {
            return [
                {
                    name: 'Matelot',
                    imageName: 'matelot.png'
                },
                {
                    name: 'Quartier Maître de 2e classe',
                    imageName: 'qm_2.png'
                },
                {
                    name: 'Quartier-Maître de 1re classe',
                    imageName: 'qm_1.png'
                },
                {
                    name: 'Maistrancier',
                    imageName: 'maistrancier.png'
                },
                {
                    name: 'Second Maître',
                    imageName: 'second_maitre.png'
                },
                {
                    name: 'Maître',
                    imageName: 'maitre.png'
                },
                {
                    name: 'Premier Maître',
                    imageName: 'premier_maitre.png'
                },
                {
                    name: 'Maître Principal',
                    imageName: 'maitre_principal.png'
                },
                {
                    name: 'Major',
                    imageName: 'major.png'
                },
                {
                    name: 'Aspirant',
                    imageName: 'aspirant.png'
                },
                {
                    name: 'Enseigne de Vaisseau de 2e classe',
                    imageName: 'enseigne_vaisseau_2.png'
                },
                {
                    name: 'Enseigne de Vaisseau de 1re classe',
                    imageName: 'enseigne_vaisseau_1.png'
                },
                {
                    name: 'Lieutenant de Vaisseau',
                    imageName: 'lieutenant_vaisseau.png'
                },
                {
                    name: 'Capitaine de Corvette',
                    imageName: 'capitaine_corvette.png'
                },
                {
                    name: 'Capitaine de Frégate',
                    imageName: 'capitaine_fregate.png'
                },
                {
                    name: 'Capitaine de Vaisseau',
                    imageName: 'capitaine_vaisseau.png'
                },
                {
                    name: 'Contre-Amiral',
                    imageName: 'contre_amiral.png'
                },
                {
                    name: 'Vice-Amiral',
                    imageName: 'vice_amiral.png'
                },
                {
                    name: 'Vice-Amiral d\'Escadre',
                    imageName: 'vice_amiral_escadre.png'
                },
                {
                    name: 'Amiral',
                    imageName: 'amiral.png'
                }
            ];
        }
    }
}