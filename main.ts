/**
 * This extension is designed to programme and drive the Smart AI Lens(二郎神)
 */
//% weight=0 color=#0031AF icon="\uf06e"
//% groups='["Basic", "Ball", "Face", "Card", "Color", "Tracking", "Learn"]'
//% block="Smart AI-Lens"
namespace SmartAILens {
    const CameraAdd = 0X14;
    let DataBuff = pins.createBuffer(9);
    /**
    * Status List of Ball
    */
    export enum FuncList {
        //% block="Card recognition"
        Card = 2,
        //% block="Face recognition" 
        Face = 6,
        //% block="Ball recognition"
        Ball = 7,
        //% block="Tracking recognition"
        Tracking = 8,
        //% block="Color recognition"
        Color = 9,
        //% block="Learn Object"
        Things = 10
    }
    /**
    * Status List of Ball
    */
    export enum Ballstatus {
        //% block="Color"
        Color = 1,
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Ball TotalNum"
        BallTotalNum = 7,
        //% block="Ball order"
        Ballorder = 8
    }
    /**
    * Status List of Face
    */
    export enum Facestatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Face TotalNum"
        FaceTotalNum = 7,
        //% block="Face order"
        Faceorder = 8
    }
    /**
    * Status List of Card
    */
    export enum Cardstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Card TotalNum"
        CardTotalNum = 7,
        //% block="Card order"
        Cardorder = 8
    }
    /**
    * Status List of Color
    */
    export enum Colorstatus {
        //% block="X"
        X = 2,
        //% block="Y"
        Y = 3,
        //% block="W"
        W = 4,
        //% block="H"
        H = 5,
        //% block="Confidence level "
        Confidence = 6,
        //% block="Color TotalNum"
        ColorTotalNum = 7,
        //% block="Color order"
        Colororder = 8
    }
    /**
    * Status List of Color
    */
    export enum ColorLs {
        //% block="Black"
        black = 0,
        //% block="Blue"
        blue = 1,
        //% block="Brown"
        brown = 2,
        //% block="Green"
        green = 3,
        //% block="Orange"
        orange = 4,
        //% block="Pink"
        pink = 5,
        //% block="Purple"
        purple = 6,
        //% block="Red"
        red = 7,
        //% block="Rose"
        rose = 8,
        //% block="White"
        white = 9,
        //% block="Yellow"
        yellow = 10
    }

    export enum Linestatus {
        //% block="Angel"
        angel = 1,
        //% block="Width"
        width = 2,
        //% block="Len"
        len = 3
    }
    export enum LineTrend{
        //% block="Left"
        left,
        //% block="Right"
        right
    }
    /**
    * Number Cards List
    */
    export enum numberCards{
        //% block="0"
        zero = 0,
        //% block="1"
        one = 1,
        //% block="2"
        two = 2,
        //% block="3"
        three = 3,
        //% block="4"
        four = 4,
        //% block="5"
        five = 5,
        //% block="6"
        six = 6,
        //% block="7"
        seven = 7,
        //% block="8"
        eight = 8,
        //% block="9"
        nine = 9
    }
    /*
    * Letters Cards List
    */
    export enum letterCards{
        //% block="A"
        A = 0,
        //% block="B"
        B = 1,
        //% block="C"
        C = 2,
        //% block="D"
        D = 3,
        //% block="E"
        E = 4,
        //% block="F"
        F = 5,
        //% block="G"
        G = 6,
        //% block="H"
        H = 7,
        //% block="I"
        I = 8,
        //% block="J"
        J = 9,
        //% block="K"
        K = 10,
        //% block="L"
        L = 11,
        //% block="M"
        M = 12,
        //% block="N"
        N = 13,
        //% block="O"
        O = 14,
        //% block="P"
        P = 15,
        //% block="Q"
        Q = 16,
        //% block="R"
        R = 17,
        //% block="S"
        S = 18,
        //% block="T"
        T = 19,
        //% block="U"
        U = 20,
        //% block="V"
        V = 21,
        //% block="W"
        W = 22,
        //% block="X"
        X = 23,
        //% block="Y"
        Y = 24,
        //% block="Z"
        Z = 25
    }
    /*
    * Traffic Cards List
    */
    export enum trafficCards{
        //% block="Forward"
        forward = 1,
		//% block="Back"
        back = 0,
		//% block="Stop"
        stop = 4,
		//% block="Turn left"
        turnleft = 2,
		//% block="Turn right"
        turnright = 3
    }
    /*
    * Other Cards List
    */
    export enum otherCards{
        //% block="Circle"
        circle = 0,
		//% block="Hexagon"
        hexagon = 1,
		//% block="Pentagon"
        pentagon = 2,
		//% block="Rectangle"
        rectangle = 3,
		//% block="Triangle"
        triangle = 5,

		//% block="Airplane"
        airplane = 6,
		//% block="Apple"
        apple = 7,
		//% block="Ship"
        ship = 8,
		//% block="Bread"
        bread = 9,
		//% block="Car"
        car = 10,
		//% block="Cat"
        cat = 11,
		//% block="Cup"
        cup = 12,
		//% block="Dog"
        dog = 13,
		//% block="Egg"
        egg = 14,
		//% block="Grape"
        grape = 15,
		//% block="Pear"
        pear = 16,
		//% block="Strawberry"
        strawberry = 17,
		//% block="Umbrella"
        umbrella = 18
    }
    /**
    * TODO: Waiting for module initialize.
    */
    //% block="Initialize AI-Lens via IIC port"
    //% group="Basic" weight=100
    export function initModule():void{
        let timeout = 0
        while (!(pins.i2cReadNumber(CameraAdd, NumberFormat.Int8LE))) {
            timeout++
            if(timeout > 100){
                basic.showString("Init AILens Error!")
            }
        }   
    }
    /**
    * TODO: Switch recognition objects.
    * @param fun Function list eg: FuncList.Face
    */
    //% block="Switch function as %fun"
    //% fun.fieldEditor="gridpicker"
    //% fun.fieldOptions.columns=3
    //% group="Basic" weight=95
    export function switchfunc(fun: FuncList):void{
        let funcBuff = pins.i2cReadBuffer(CameraAdd, 9)
        funcBuff[0]=0x20
        funcBuff[1]=fun
        pins.i2cWriteBuffer(CameraAdd, funcBuff)
    }

    /**
    * TODO: Get the image in a frame
    */
    //% block="Get one image from AI-Lens"
    //% group="Basic" weight=90
    export function cameraImage(): void {
        DataBuff = pins.i2cReadBuffer(CameraAdd, 9)
        basic.pause(10)
    }

    /**
    * TODO: Judge the image contains a ball
    */
    //% block="Image contains ball(s)"
    //% group="Ball" weight=85
    export function checkBall(): boolean {
        return DataBuff[0] == 7
    }
    /**
    * TODO: In the image get ball(s)' info
    */
    //% block="In the image get ball(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Ball" weight=80
    export function ballData(status: Ballstatus): number {
        if (DataBuff[0] == 7) {
            switch (status) {
                case Ballstatus.Color:
                    return DataBuff[1]
                    break
                case Ballstatus.X:
                    return DataBuff[2]
                    break
                case Ballstatus.Y:
                    return DataBuff[3]
                    break
                case Ballstatus.W:
                    return DataBuff[4]
                    break
                case Ballstatus.H:
                    return DataBuff[5]
                    break
                case Ballstatus.Confidence:
                    return DataBuff[6]
                    break
                case Ballstatus.BallTotalNum:
                    return DataBuff[7]
                    break
                case Ballstatus.Ballorder:
                    return DataBuff[8]
                    break
                default:
                    return 0;
            }
        }
        else {
            return null
        }
    }

    /**
    * TODO: Judge whether there is a face in the picture
    */
    //% block="Image contains a face"
    //% group="Face" weight=75
    export function checkFace(): boolean {
        return DataBuff[0] == 6
    }
    /**
    * TODO: Judge whether there is a face in the picture
    * @param status Facestatus, eg: Facestatus.X
    */
    //% block="In the image get face(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Face" weight=70
    export function faceData(status: Facestatus): number {
        if (DataBuff[0] == 6) {
            switch (status) {
                case Facestatus.X:
                    return DataBuff[2]
                    break
                case Facestatus.Y:
                    return DataBuff[3]
                    break
                case Facestatus.W:
                    return DataBuff[4]
                    break
                case Facestatus.H:
                    return DataBuff[5]
                    break
                case Facestatus.Confidence:
                    return DataBuff[6]
                    break
                case Facestatus.FaceTotalNum:
                    return DataBuff[7]
                    break
                case Facestatus.Faceorder:
                    return DataBuff[8]
                    break
                default:
                    return null
            }
        }
        else {
            return null
        }
    }
    /**
    * TODO: Judge whether there is a digital card in the screen
    * @param status numberCards, eg: numberCards.1
    */
    //% block="Image contains number card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=65
    export function numberCard(status:numberCards): boolean{
        if (DataBuff[0] == 2) {
            return status == DataBuff[1] - 1
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a letter card in the screen
    * @param status letterCards, eg: letterCards.A
    */
    //% block="Image contains letter card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=60
    export function letterCard(status:letterCards): boolean{
        if (DataBuff[0] == 3) {
            return status == DataBuff[1] - 1
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a traffic card in the screen
    * @param status trafficCards, eg: trafficCards.forward
    */
    //% block="Image contains traffic card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=55
    export function trafficCard(status:trafficCards): boolean{
        if (DataBuff[0] == 4) {
            return status == DataBuff[1] - 1
        }
        else
            return false
    }
    /**
    * TODO: Judge whether there is a other card in the screen
    * @param status otherCards, eg: otherCards.cat
    */
    //% block="Image contains other card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=50
    export function otherCard(status:otherCards): boolean{
        if (DataBuff[0] == 5) {
            return status == DataBuff[1] - 1 
        }
        else
            return false
    }
    /**
    * TODO: Card parameters in the screen
    * @param status otherCards, eg: Cardstatus.X
    */
    //% block="In the image get card(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Card" weight=45
    export function CardData(status: Cardstatus): number {
        if (DataBuff[0] == 2 || DataBuff[0] == 3 || DataBuff[0] == 4 || DataBuff[0] == 5) {
            switch (status) {
                case Cardstatus.X:
                    return DataBuff[2]
                    break
                case Cardstatus.Y:
                    return DataBuff[3]
                    break
                case Cardstatus.W:
                    return DataBuff[4]
                    break
                case Cardstatus.H:
                    return DataBuff[5]
                    break
                case Cardstatus.Confidence:
                    return DataBuff[6]
                    break
                case Cardstatus.CardTotalNum:
                    return DataBuff[7]
                    break
                case Cardstatus.Cardorder:
                    return DataBuff[8]
                    break
                default:
                    return null
            }
        }
        else
            return null
    }
    /**
    * TODO: line parameters in the screen
    * @param status Linestatus, eg: Linestatus.angle
    */
    //% block="In the image get line(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Tracking"
    //% weight=35
    export function lineData(status: Linestatus): number {
        if (DataBuff[0] == 8) {
            switch (status) {
                case Linestatus.angel:
                    return DataBuff[1]
                    break
                case Linestatus.width:
                    return DataBuff[2]
                    break
                case Linestatus.len:
                    return DataBuff[3]
                    break
                default:
                    return 0
            }
        }
        else
            return null
    }
    /**
    * TODO: line parameters in the screen
    * @param status Linestatus, eg: Linestatus.angle
    */
    //% block="Image contains line's direction towards %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=2
    //% group="Tracking"
    //% weight=34
    export function lineDirection(status: LineTrend):boolean{
        if (DataBuff[0] == 8) {
            switch (status) {
                case LineTrend.left:
                    if(DataBuff[2] < 90){
                        return true
                    }
                    else{
                        return false
                    }
                    break
                case LineTrend.right:
                    if(DataBuff[2] > 130){
                        return true
                    }
                    else{
                        return false
                    }
                    break
            }
        }
        return false
    }
    /**
    * TODO: Judge whether there is a color in the screen
    * @param status ColorLs, eg: ColorLs.red
    */
    //% block="Image contains color card(s): %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Color" weight=30
    export function colorCheck(status: ColorLs): boolean {
        if (DataBuff[0] == 9) {
            return status == DataBuff[1] - 1
        }
        else
            return false
    }
    /**
    * TODO: color parameters in the screen
    * @param status Colorstatus, eg: Colorstatus.X
    */
    //% block="In the image get color card(s)' info: %status"
    //% status.fieldEditor="gridpicker"
    //% status.fieldOptions.columns=3
    //% group="Color" weight=25
    export function colorData(status: Colorstatus): number {
        if (DataBuff[0] == 9) {
            switch (status) {
                case Colorstatus.X:
                    return DataBuff[2]
                    break
                case Colorstatus.Y:
                    return DataBuff[3]
                    break
                case Colorstatus.W:
                    return DataBuff[4]
                    break
                case Colorstatus.H:
                    return DataBuff[5]
                    break
                case Colorstatus.Confidence:
                    return DataBuff[6]
                    break
                case Colorstatus.ColorTotalNum:
                    return DataBuff[7]
                    break
                case Colorstatus.Colororder:
                    return DataBuff[8]
                    break
                default:
                    return null
            }
        }
        else {
            return null
        }
    }
    /**
    * TODO: Learn an object in a picture
    * @param thingsID Edit a label for the object, eg: 1
    */
    //% block="Learn an object with ID: %thingsID"
    //% group="Learn" weight=20 
    //% thingsID.del=1
    export function learnObject(thingsID: number): void {
        let thingsBuf = pins.createBuffer(9)
        let timeout = 0
        thingsBuf[0] = 10
        thingsBuf[1] = thingsID
        pins.i2cWriteBuffer(CameraAdd, thingsBuf)
        while (timeout > 10000) {
            cameraImage()
            if (DataBuff[0] == 9 && DataBuff[1] == thingsID) {
                break
            }
            timeout++
        }
    }
    /**
    * TODO: Judge whether there are any learned objects in the picture
    */
    //% block="In the image get learnt object ID"
    //% group="Learn" weight=15
    export function objectID(): number {
        if (DataBuff[0] == 10 && DataBuff[2] < 10) {
            return DataBuff[1]
        }
        else{
            return null
        }
    }
}