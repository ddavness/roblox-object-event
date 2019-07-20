⚠️ **Still a WIP project!** ⚠️ ️

#@rbxts/object-event

This NPM Package for Roblox-TS allows developers to implement custom Events for custom classes, without resorting to `BindableEvents`.

This should be particularly useful for projects that heavily rely on the OOP paradigm for libraries and other game components. 

##Current Features:

- Standard Roblox Event Feature Set:
- - Connecting;
- - Disconnecting a connection;
- - Yield thread until event is fired;
- - Passing arguments through the functions;

- Custom features;
- - Reconnecting a disconnected connection without having to make a new one (ability to reuse connections).

##Goals:

- Abstraction from internals;
- Roblox-like syntax while keeping a minimum of decency for TypeScript syntax;
- Code readability for OOP implementations.
- Complement Roblox's implementation with extra (useful) features.

*Not-A-JavaScript-Framework.*