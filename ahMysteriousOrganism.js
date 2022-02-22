/* ahMysteriousOrganism.js, codecademy.com full-stack engineer career path exercise,
    andihafner.com 2022 
    
    This code simulates the DNA evolution of a simple organism...

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
        },
        compareDNA(specToCompare) {
            //console.log(this.specimenNum, specToCompare.specimenNum);
            let equalBasesCount = 0;
            this.dna.forEach((base, index) => {
                if (base === specToCompare.dna[index]) {
                    equalBasesCount += 1;
                }
            })
            console.log(`Specimen #${this.specimenNum} and specimen #${specToCompare.specimenNum} have ${Math.floor(equalBasesCount / 15 * 100)}% DNA in common.`);
        },
        willLikelySurvive() {
            let basesOfCorGCount = 0;
            this.dna.forEach(base => {
                if (base === 'C' || base === 'G') {
                    basesOfCorGCount += 1;
                }
            })
            let ratio = Math.floor(basesOfCorGCount / 15 * 100);
            if (ratio >= 60) {
                return true
            }
            return false;
        }
    };
};

let spec1 = pAequorFactory(1, mockUpStrand());
let spec2 = pAequorFactory(2, mockUpStrand());

console.log(spec1, spec2);

//spec1.compareDNA(spec2);

console.log(spec1.willLikelySurvive());