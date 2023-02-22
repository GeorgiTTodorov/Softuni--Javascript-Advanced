function constructionCrew(obj) {
    // 0.1ml per kilogram per year of experience required amount of water intake
    
        if (obj.dizziness === true) {
            let formula = obj.weight * 0.1 * obj.experience;
            obj.levelOfHydrated += formula;
            obj.dizziness = false;
            return obj;
        } else {
            return obj;
        }

}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));
console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ))