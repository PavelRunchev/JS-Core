function mixins(){
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

    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        };
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            if(this.manufacturer === this.keyboard.manufacturer){
                return this.monitor.manufacturer === this.keyboard.manufacturer;
            }
            return false;
        };

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3
                && (this.color === "Silver" || this.color === "Black")
                && this.weight < 3;
        };
    }

    return {computerQualityMixin, styleMixin};
}