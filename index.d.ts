/*
    File: index.d.ts
    Author: davness
    Year: 2019
    License: MIT

    Describes types for the package.
*/

/**
    An ObjectEvent is a custom implementation inspired on the Roblox Signal API for user-defined objects.
    ObjectEvents are meant to be as versatile as possible, and resemble the Roblox's syntax, while also adding extra features.
*/
interface ObjectEvent<$funcType = [number, number]> { 
    /**
        Exposes all the active (connected) ObjectEventConnections plugged in the event.
    */
    readonly SubscribedConnections: ObjectEventConnection<$funcType>[];

    /**
        Connects a function, returns a connection.
        @param fn Any function you wish to connect. Must return void.
    */
    Connect(fn: ($funcType) => void): ObjectEventConnection<$funcType>;

    /**
        Halts the thread this method is called within until the event is fired.
    */
    Wait(): any[];

    /**
        Fires the event, resuming all threads stopped with .Wait() and calling all connections.
        @param args Any values you wish to pass to the connections and threads.
     */
    Fire(...args:any[]): void;
}

// Connection interface won't have a constructor because the only legit way is via the :Connect() function
interface ObjectEventConnection<funcType> {
    /**
        The function that will be called when the event fires.
    */
    readonly Listener: (funcType) => void;

    /**
        The event this connection is connected to.
    */
    readonly Event: ObjectEvent<funcType>;

    /**
        Returns whether the function is connected or not.
    */
    IsConnected(): boolean;

    /**
        Disconnects the connection from the event.
    */
    Disconnect(): void;

    /**
        Reconnects a disconnected function to the event.
    */
    Reconnect(): void;
}

declare const ObjectEvent: new<$arguments>() => ObjectEvent<$arguments>
export = ObjectEvent;