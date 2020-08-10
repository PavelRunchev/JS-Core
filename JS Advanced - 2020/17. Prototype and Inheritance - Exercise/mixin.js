function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function() {
            if(this.processorSpeed > (this.ram / 4))
                return true;
            return false;
        };

        classToExtend.prototype.isRoomy = function() {
            if(this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed))
                return true;
            return false;
        };
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function() {
            if(this.keyboard.manufacturer === this.monitor.manufacturer 
                && this.manufacturer === this.keyboard.manufacturer)
                return true;
            return false;
        };

        classToExtend.prototype.isClassy = function() {
            if(this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') 
                && this.weight < 3)
                return true;
            return false;
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    };
}

function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if(this.constructor.name === Computer.name)
                throw new Error('Cannot instantiate abstract class!');

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if(value instanceof Battery === false)
                throw new TypeError('That is not an instance of Battery to the laptop!');

            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if(value instanceof Keyboard == false)
                throw new TypeError('That is not an instance of Keyboard to the desktop!');
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if(value instanceof Monitor == false)
                throw new TypeError('That is not an instance of Monitor to the desktop!');
            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
}

const c = createComputerHierarchy();
const keyboard = new c.Keyboard('Benq', 0.15);
const monitor = new c.Monitor('Benq', 27.5, 15.5);
const battery = new c.Battery('Samsung', 3);

// attach method in abstract class!!!
createMixins().computerQualityMixin(c.Computer);


//Before that call method getQuality must be create new instance to class Laptop, 
//otherwise throw type error because property is undefined!
let laptop = new c.Laptop('Dell', 3.7, 16, 2, 2.3, 'Silver', battery);
console.log(laptop.getQuality());
console.log(laptop.isFast());

let desktop = new c.Desktop('Benq', 4000, 8, 2000, keyboard, monitor);
createMixins().styleMixin(c.Computer);

console.log(desktop.isFullSet());
console.log(laptop.isClassy());


