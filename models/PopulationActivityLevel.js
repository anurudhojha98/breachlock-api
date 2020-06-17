class PopulationSubType {
    sedentaryWork;
    moderateWork;
    heavywork;
    pregnant;
    lactating;
    constructor() { }
    set sedentaryWork(sedentryWork) {
        this.sedentaryWork = sedentryWork;
    }
    get sedentaryWork() {
        return this.sedentaryWork
    }

    set moderateWork(moderateWork) {
        this.moderateWork = moderateWork;
    }
    get moderateWork() {
        return this.moderateWork
    }

    set heavywork(heavywork) {
        this.heavywork = heavywork;
    }
    get heavywork() {
        return this.heavywork
    }

    set pregnant(pregnant) {
        this.pregnant = pregnant;

    }
    get pregnant() {
        return this.pregnant;
    }

    set lactating(lactating) {
        this.lactating = lactating;
    }
    get lactating() {
        return this.lactating;
    }
}