class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if(requiredSpace > this.hddMemory)
            throw new Error('There is not enough space on the hard drive');

        const installProgram = { name, requiredSpace };
        this.installedPrograms.push(installProgram);
        this.hddMemory -= requiredSpace;

        return installProgram;
    }

    uninstallAProgram(name) {
        if(!(this.installedPrograms.find(p => p.name === name)))
            throw new Error('Control panel is not responding');

        const uninstallProgram = this.installedPrograms.find(p => p.name === name);
        this.installedPrograms = this.installedPrograms.filter(p => p.name !== name);

        this.hddMemory += uninstallProgram.requiredSpace;
        return this.installedPrograms;
    }

    openAProgram(name) {
        let openProgram = this.installedPrograms.find(p => p.name === name);
       
        if(openProgram !== undefined && openProgram.hasOwnProperty('name')) {
            if(this.taskManager.some(p => p.name === openProgram.name)) {
                throw new Error(`The ${name} is already open`);
            }
            else {
                const ramUsage = (openProgram.requiredSpace / this.ramMemory) * 1.5;
                const cpuUsage = ((openProgram.requiredSpace / this.cpuGHz) / 500) * 1.5;

                let totalRamUsages = ramUsage;
                let totalCpuUsages = cpuUsage;
                this.taskManager.forEach(p => {
                    totalRamUsages += p.ramUsage;
                    totalCpuUsages += p.cpuUsage;
                });
                   
                if(totalRamUsages >= 100)
                    throw new Error(`${name} caused out of memory exception`);

                if(totalCpuUsages >= 100)
                    throw new Error(`${name} caused out of cpu exception`);

                const programForTaskManager = { name, ramUsage, cpuUsage };
                this.taskManager.push(programForTaskManager);
                return programForTaskManager;
            }
        }
        else {
            throw new Error(`The ${name} is not recognized`);
        }
        
        return name;
    }

    taskManagerView() {
        if(this.taskManager.length === 0)
            return "All running smooth so far";

        let output = '';
        output += `Name - ${this.taskManager[0].name} | Usage - CPU: ${this.taskManager[0].cpuUsage.toFixed(0)}%, RAM: ${this.taskManager[0].ramUsage.toFixed(0)}%`;
        for (let i = 1; i < this.taskManager.length; i++) {
            let p = this.taskManager[i];
            output += `\nName - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%`;
        }

        return output;
    }
}

try{
    let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);


computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');

computer.openAProgram('Solitare');

console.log(computer.taskManagerView());


// let computer = new Computer(4096, 7.5, 250000);

// computer.installAProgram('Word', 7300);
// computer.installAProgram('Excel', 10240);
// computer.installAProgram('PowerPoint', 12288);
// computer.uninstallAProgram('Word');
// computer.installAProgram('Solitare', 1500);

// computer.openAProgram('Excel');
// computer.openAProgram('Solitare');

// console.log(computer.installedPrograms);
// console.log(('-').repeat(50)) // Separator
// console.log(computer.taskManager);
}
catch(err){
    console.log(err.message);
}




