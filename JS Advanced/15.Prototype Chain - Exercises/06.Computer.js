function createComputer(){
    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target === Computer){
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.battery = battery;
            this.weight = weight;
            this.color = color;
        }

        get battery(){
            return this._battery;
        }

        set battery(batt){
            if(!(batt instanceof Battery)){
                throw new TypeError("This is not valid battery!");
            }

            this._battery = batt;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(key){
            if(!(key instanceof Keyboard)){
                throw new TypeError("This is not valid keyboard!");
            }
            this._keyboard = key;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(mon){
            if(!(mon instanceof Monitor)){
                throw new TypeError("This is not valid monitor!");
            }

            this._monitor = mon;
        }
    }

    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    return {Computer, Laptop, Desktop, Keyboard, Monitor, Battery};
}

