I have attempted to remove company references in this task so I can keep the repo public.

## Breeding Rules

1. Determine 50% random chance of success.
2. Select 1 random female.
3. Select 1 random male.
4. If success and both sheep are unbranded, create new sheep with random gender and generated name.

## Notes

* ```npm run test``` for unit tests

* I wouldn't usually mix class and function components in a project.  As I'd been provided class components in the repo I decided to demonstrate I can use both.

* Sheep deliberately move after each state change.  I could have stored their positions in state but decided I quite liked them moving around.

* Females white heads.  Males black heads.

* The brief said use 'use common sense'.  I interpreted this to mean only males could breed with females.  I decided to include branded sheep in breeding selection.  I think this makes pressing the buttons more interesting - the more you brand, the harder it is to breed.


* I side-stepped creating a ```type Gender``` by using an ```isFemale``` boolean.  I've defined ```checkSex()``` on ```Sheep``` to show how I'd achieve the same effect.

* I wanted to separate business rules from React so I created ```FieldManagement``` to hide my implementations with ```FieldOfSheep``` as the interface.  For ```FieldManagement``` I'm using ```abstract``` to simulate a static class though could of used a module.

* ```field-threed.tsx``` is unused in the initial push.  After experimenting, I decided to use svg for the first version.  For fun I'll create a 3D version using Three.js (which is why that's in my ```package.json```)
