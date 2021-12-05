// domain object model = entity 
interface PersonDOM extends Comparable {
    name?: string;
    surname?: string;
    age: Number;
}

class Person implements PersonDOM {

    name?: string;
    surname?: string;
    age: Number;

    constructor(age: Number, name?: string, surname?: string) {
        this.age = age;
        this.name = name;
        this.surname = surname;
    }

    '=*='<T>(lhs: T, rhs: T): boolean {
        return true;
    }

    '>*'<T>(lhs: T, rhs: T): boolean {
        return true;
    }

}
/*
interface NetworkClient {

}

interface HomeRouter {
    gotoDetailView(): void
}

class Home {
    client: NetworkClient;
    router: HomeRouter;

    constructor(client: NetworkClient, router: HomeRouter){
        this.client = client;
        this.router = router;
    }
}

// abstract factory
class RootFactory {

    static home (client: NetworkClient, router: HomeRouter): Home {
        const scene = new Home(client, router);
        return scene;
    }

}

RootFactory.home()

*/