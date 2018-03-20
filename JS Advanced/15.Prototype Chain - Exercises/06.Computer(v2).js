function createComputer() {
    class Manufacturer{
        constructor(manufacturer){
            if(new.target === Manufacturable){
                throw new Error("Cannot instantiate an abstact class.");
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Manufacturer{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Manufacturer{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Manufacturer{
        constructor(manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Manufacturer{
        constructor(manufacturer, processorSPeed, ram, hardDiskSpace){
            if(new.target === Computer){
                throw new Error("Cannot instantiate an abstact class.");
            }
            super(manufacturer);
            this.processorSpeed = processorSPeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSPeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSPeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery(){
            return this._battery;
        }

        set battery(value){
            if(!(value instanceof Battery)){
                throw new TypeError("This is not valid battery!");
            }
            this._battery = value;
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

        set monitor(value){
            if(!(value instanceof Monitor)){
                throw new TypeError("This is not valid monitor!");
            }
            this._monitor = value;
        }
    }

    return{Keyboard, Monitor, Battery, Computer, Laptop, Desktop};
}


