import Route from '@ember/routing/route';

export default class DogsRoute extends Route {
    model(){
        return [{
            id: 1,
            name: "simba",
        },
        {
            id: 2,
            name: "nala",
        }]
    }
}
