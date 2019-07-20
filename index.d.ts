/*
    File: index.d.ts
    Author: davness
    Year: 2019
    License: MIT

    Describes types for the package.
*/

/*
    An ObjectEvent is a custom implementation inspired on the Roblox Signal API for user-defined objects.
    ObjectEvents are meant to be as versatile as possible, and resemble the Roblox's syntax, while also adding extra features.
*/
interface ObjectEvent {
    constructor(): ObjectEvent 
    
    /*
        Exposes all the active (connected) ObjectEventConnections plugged in the event.
    */
    readonly SubscribedConnections: ObjectEventConnection[];

    /*
        Connects a function, returns a connection.
        @param fn Any function you wish to connect. Must return void.
    */
    Connect(fn: (...all:any[]) => void): ObjectEventConnection;

    /*
        Halts the thread this method is called within until the event is fired.
    */
    Wait(): any[];

    /*
        Fires the event, resuming all threads stopped with .Wait() and calling all connections.
        @param args Any values you wish to pass to the connections and threads.
    */
    Fire(...args:any[]): void;
}

// Connection interface won't have a constructor because the only legit way is via the :Connect() function
interface ObjectEventConnection {
    /*
        The function that will be called when the event fires.
    */
    readonly Listener: (...all:any[]) => void;

    /*
        The event this connection is connected to.
    */
    readonly Event: ObjectEvent;

    /*
        Returns whether the function is connected or not.
    */
    IsConnected(): boolean;

    /*
        Disconnects the connection from the event.
    */
    Disconnect(): void;

    /*
        Reconnects a disconnected function to the event.
    */
    Reconnect(): void;
}

export {ObjectEvent}