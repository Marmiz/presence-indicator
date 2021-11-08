This is a non-exaustive list of thought of what to me the Presence Indicators means.

## Requirements

- at the bottom of the page I see a list of avatars that are working on element not in view
- I see next the element the avatar(s) of people focusing on it
- Smooth transition/animation

This means solving two points:

1. Determine how/what is in view. _possible solution_: scrollEvent + getBoundingClientRect()
2. onFocus() event to update where a user is.

### Questions:

- Does avatar have position absolute? This way we avoid the need of having them be part of the flow of the document. _drawback_: harder positioning/animation

- Does visible avatars that are in view are part of the element? This way it's easier to position/animate them. _drawback_: harder to refactor/remove/polish in the future as possibly need to update lots of component; for exaple the <Title /> of each field need to accept a new <Avatar />[] props.

### Solutions:

- getBoundingClientRect()
- useRef()
- FramerMotion?
