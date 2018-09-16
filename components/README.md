# Components

Components should be a mix of Atomic Design and the Smart/Dumb pattern.

### Atoms (Presentational/Dumb)
Atoms are the most simple component you can have. It should only take in props and emit events. It should *never* have any dependencies

### Molecules (Presentational/Dumb)
Molecules are combnations of both atoms and molecules. Like atoms they shouldnt have any dependencies, but should more present a combined UI that the user can interact with. All actions are mutabl

### Organisms (Container/Smart)
Should be either one or a collection of molecules. They should have the responsibility of holding the state.

### Templates (Container)
Templates are used by the /pages/master.vue. They take in a viewModel and use that to display the content of the page

#### Links
- Read more about smart and dumb components here: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
- Read more about atomic here http://bradfrost.com/blog/post/atomic-web-design/