/* ahMysteriousOrganism.js, codecademy.com full-stack engineer career path exercise,
    andihafner.com 2022 
    
    This code simulates the dna evolution of a simple deep sea organism...

    */

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,
        mutate() {
            const pos = Math.floor(Math.random() * 15);
            const currentBase = dna[pos];
            let newBase = '';
            while (newBase === '' || newBase === currentBase) {
                newBase = returnRandBase();
            }
            dna[pos] = newBase;
            return dna;
        }
    };
};

/*
let dna1 = mockUpStrand();
let dna2 = mockUpStrand();
 */

let spec1 = pAequorFactory(1, mockUpStrand());
let spec2 = pAequorFactory(2, mockUpStrand());

console.log(spec1, spec2);
