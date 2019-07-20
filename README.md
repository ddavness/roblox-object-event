<p align="center"><b>⚠️ Still a WIP project! ⚠️ ️</b></p>

<h1><p align="center">@rbxts/object-event</p></h1>

<p align="center"><a href="https://badge.fury.io/js/%40rbxts%2Fobject-event"><img src="https://badge.fury.io/js/%40rbxts%2Fobject-event.svg" alt="npm version" height="18"></a></p>

This NPM Package for Roblox-TS allows developers to implement custom Events for custom classes, without resorting to `BindableEvents`.

This should be particularly useful for projects that heavily rely on the OOP paradigm for libraries and other game components. 

## Current Features:

- Standard Roblox Event Feature Set:
- - Connecting;
- - Disconnecting a connection;
- - Yield thread until event is fired;
- - Passing arguments through the functions;

- Custom features;
- - Reconnecting a disconnected connection without having to make a new one (ability to reuse connections).

## Goals:

- Abstraction from internals;
- Roblox-like syntax while keeping a minimum of decency for TypeScript syntax;
- Code readability for OOP implementations.
- Complement Roblox's implementation with extra (useful) features.

*Not-A-JavaScript-Framework.*