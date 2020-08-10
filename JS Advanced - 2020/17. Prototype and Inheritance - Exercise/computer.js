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
const keyboard = new c.Keyboard('Genius', 0.15);
const monitor = new c.Monitor('Benq', 27.5, 15.5);
const battery = new c.Battery('Samsung', 3);

const laptop = new c.Laptop('Dell', 3.7, 16, 2, 17, 'silver', battery);
console.log(laptop);

console.log(new c.Desktop('Asus', 4, 8, 2, keyboard, monitor));
