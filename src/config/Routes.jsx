import DataStructure from "../pages/DataStructure";
import Dynamic from "../pages/Dynamic";
import Graph from "../pages/Graph";
import Hashed from "../pages/Hashed";
import LinkedList from "../pages/LinkedList";
import Search from "../pages/Search";
import Sort from "../pages/Sort";
import TreeTraversal from "../pages/TreeTraversal";

export const route = [
    {
        name: 'Dynamic Algorithm',
        path: '/dynamic_algorithm',
        element: <Dynamic />
    }, {
        name: 'Graph Algorithm',
        path: '/graph_algorithm',
        element: <Graph />
    }, {
        name: 'Hashed Algorithm',
        path: '/hashe_dalgorithm',
        element: <Hashed />
    }, {
        name: 'Linked List',
        path: '/linked_list',
        element: <LinkedList />
    },
    {
        name: 'Search Algorithm',
        path: '/search_algorithm',
        element: <Search />
    }, {
        name: 'Sort Algorithm',
        path: '/sort_algorithm',
        element: <Sort />
    }, {
        name: 'Tree Traversal',
        path: '/tree_traversal_algorithm',
        element: <TreeTraversal />
    }, {
        name: 'Data Structure',
        path: '/data_structure',
        element: <DataStructure />
    }
]