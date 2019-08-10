function worker(obj) {
    if(obj['dizziness'] === true) {
        obj['levelOfHydrated'] += obj['weight'] * (obj['experience'] * 0.1);
        obj['dizziness'] = false;
    }
        
    return obj;
}

console.log(worker({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
