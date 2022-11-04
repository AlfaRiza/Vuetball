export function EndPoints() {
    const areaUrl = () => {
        return `areas/`
    }

    const competitionsUrl = () => {
        return `competitions`
    }
    
    const teamsUrl = () => {
        return `teams`
    }

    const personsUrl = () => {
        return `persons`
    }

    return {
        areaUrl,
        competitionsUrl,
        teamsUrl,
        personsUrl
    }
}