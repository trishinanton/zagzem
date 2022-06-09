import React, { Component } from 'react'

const AppState = React.createContext({})

class AppStateProvider extends Component {
  state = {
    villages: [],
    villagesPromo: [],
    filteredVillages: [],

    selectedVillage: null,
    selectedRoads: [],
    selectedAreas: [],
    selectedCommunications: [],
    selectedSafety: [],
    selectedVillageRoads: [],
    selectedVillageTypes: [],
    selectedWaysToGet: [],
    selectedFromMkad: 90,
    selectedPriceFrom: 20000000,
    selectedTypeProperty: 1,
    selectedWorldSides: [],

    selectedRoadsBtn:[],
    selectedAreasBtn: [],
    selectedFromMkadBtn:90,
    selectedPriceBtn:20000000,

    uniqRoads: [],
    uniqAreas:[],
    uniqSides: [],
    uniqPrices: [],

    defaultSelectedFromMkad: 90,
    defaultSelectedPriceFrom: 20000000,
  }


  handlerArr = (array, object) => {
    var index = array.indexOf(object)
    if (index === -1) array.push(object)
    else array.splice(index, 1);
    return array
  }

  setVillagesPromo = async(e) => {
    await this.setState({ villagesPromo: e})
  }

  setVillages = async(e) => {
    const uniqSides = []
    const uniqRoads = []
    const uniqAreas = []
    for (let i=0;i<e.length;i++) {
      const road = e[i].road
      const area = e[i].area
      const side = e[i].sideOfMkad
      const checkRoad = await uniqRoads.indexOf(road)
      const checkArea = await uniqAreas.indexOf(area)
      const checkSide = await uniqSides.indexOf(side)
      if (checkRoad === -1) uniqRoads.push(road)
      if (checkArea === -1) uniqAreas.push(area)
      if (checkSide === -1) uniqSides.push(side)
    } 
    await this.setState({
      villages: e,
      filteredVillages: e,
      uniqRoads: uniqRoads,
      uniqAreas: uniqAreas,
      uniqSides: uniqSides,
    })
  }


  filtered = async() => {
    var obj1 = this.state.villages
    var obj2 = [1,2,3,4,5,6] 
    var obj3 = 0 
    var obj5 = 0
    var obj7 = this.state.uniqRoads
    var obj8 = this.state.uniqAreas
    var obj9 = [1,2]

    if (this.state.selectedVillageRoads.length > 0) { obj2 = this.state.selectedVillageRoads }
    if (this.state.selectedFromMkad !== '' ) { obj3 = this.state.selectedFromMkad*1}
    if (this.state.selectedPriceFrom !== '') { obj5 = this.state.selectedPriceFrom*1}
    if (this.state.selectedRoads.length > 0) { obj7 = this.state.selectedRoads}
    if (this.state.selectedAreas.length > 0) { obj8 = this.state.selectedAreas}
    if (this.state.selectedVillageTypes.length > 0) { obj9 = this.state.selectedVillageTypes}

    const selectedSafety = this.state.selectedSafety
    const selectedWaysToGet = this.state.selectedWaysToGet
    const selectedCommunications = this.state.selectedCommunications

    const newArr = [];

    obj1.forEach(await function(obj) {

      let trueCommunications = true

      if (selectedCommunications.length > 0) {
        const communications = obj.communications
        const communicationsKeys = Object.keys(communications)
        const arr = []
        for (let i=0;i<communicationsKeys.length;i++) {
          arr.push(communicationsKeys[i]*1)
        }
        for (let i=0;i<selectedCommunications.length;i++) {
          if (arr.indexOf(selectedCommunications[i]) === -1) {
            trueCommunications = false
          }
        }
      }

      let trueWaysToGet = true
      if (selectedWaysToGet.length > 0) {
        const waysToGet = obj.waysToGet
        const waysToGetKeys = Object.keys(waysToGet)
        const arr = []
        for (let i=0;i<waysToGetKeys.length;i++) {
          arr.push(waysToGetKeys[i]*1)
        }
        for (let i=0;i<selectedWaysToGet.length;i++) {
          if (arr.indexOf(selectedWaysToGet[i]) === -1) {
            trueWaysToGet = false
          }
        }
      }

      let trueSafety = true
      if (selectedSafety.length > 0) {
        const safety = obj.safety
        for (let i=0;i<selectedSafety.length;i++) {
          if (safety.indexOf(selectedSafety[i]) === -1) {
            trueSafety = false
          }     
        }
      }

      if (
        obj2.indexOf(obj.roadIn) !== -1 &&
        obj9.indexOf(obj.type) !== -1 &&
        obj7.indexOf(obj.road) !== -1 &&
        obj8.indexOf(obj.area) !== -1 &&
        obj.fromMkad <= obj3 &&
        obj.priceLands[0] <= obj5 &&
        trueCommunications &&
        trueWaysToGet &&
        trueSafety
      ) { newArr.push(obj) }
    })
    this.setState({
      filteredVillages: newArr,
    })
  }

  resetFilter = async() => {
    await this.setState({
      filteredVillages: this.state.villages,
      selectedVillageTypes: [],
      selectedVillageRoads: [],
      selectedRoads: [],
      selectedRoadsBtn: [],
      selectedAreasBtn: [],
      selectedAreas: [],
      selectedFromMkadBtn:this.state.defaultSelectedFromMkad,
      selectedPriceBtn:this.state.defaultSelectedPriceFrom,
      selectedCommunications: [],
      selectedSafety: [],
      selectedWaysToGet: [],
      selectedFromMkad: this.state.defaultSelectedFromMkad,
      selectedPriceFrom: this.state.defaultSelectedPriceFrom,
    })
  }

  selectTypeProperty = (e) => { this.setState({ selectedTypeProperty: e.target.value })}

  selectFromMkad = async(e) => {
    await this.setState({ selectedFromMkad: e.replace(/[^+\d]/g, '')*1 })
    await this.filtered()
  }

  selectPriceFrom = async(e) => {
    await this.setState({ selectedPriceFrom: e.replace(/[^+\d]/g, '')*1 })
    await this.filtered()
  }

  selectWorldSide = async(e) => {
    await this.setState({
      selectedWorldSides: this.handlerArr(this.state.selectedWorldSides, e),
    })
    await this.filtered()
  }

  selectRoad = async(e) => {
    await this.setState({
      selectedRoads: this.handlerArr(this.state.selectedRoads, e)
    })
    await this.filtered()
  }

  selectRoadBtn = async (e) => {
    await this.setState({
      selectedRoadsBtn: this.handlerArr(this.state.selectedRoadsBtn, e)
    })
  }

  selectAreaBtn = async (e) => {
    await this.setState({
      selectedAreasBtn: this.handlerArr(this.state.selectedAreasBtn, e)
    })
  }

  selectFromMkadBtn = async (e) => {
    await this.setState({ selectedFromMkadBtn: e.replace(/[^+\d]/g, '')*1 })
    await this.filtered()
  }

  selectPriceBtn = async (e) => {
    await this.setState({ selectedPriceBtn: e.replace(/[^+\d]/g, '')*1 })
    await this.filtered()
  }

  selectArea = async(e) => {
    await this.setState({
      selectedAreas: this.handlerArr(this.state.selectedAreas, e)
    })
    await this.filtered()
  }

  selectVillageRoad = async(e) => {
    await this.setState({
      selectedVillageRoads: this.handlerArr(this.state.selectedVillageRoads, e),
    })
    await this.filtered()
  }

  selectVillageType = async(e) => {
    await this.setState({
      selectedVillageTypes: this.handlerArr(this.state.selectedVillageTypes, e)
    })
    await this.filtered()
  }

  selectCommunication = async(e) => {
    await this.setState({
      selectedCommunications: this.handlerArr(this.state.selectedCommunications, e)
    })
    await this.filtered()
  }

  selectSafety = async(e) => {
    await this.setState({
      selectedSafety: this.handlerArr(this.state.selectedSafety, e)
    }) 
    await this.filtered()
  }

  selectWayToGet = async(e) => {
    await this.setState({
      selectedWaysToGet: this.handlerArr(this.state.selectedWaysToGet, e)
    })
    await this.filtered()
  }

  // Select only

  selectOnlyVillageType = async(e) => {
    await this.resetFilter()
    await this.selectVillageType(e)
  }

  selectOnlyArea = async(e) => {
    // await this.resetFilter()
    await this.selectArea(e)
  }

  selectOnlyRoad = async(e) => {
    // await this.resetFilter()
    await this.selectRoad(e)
  }

  selectOnlyDist = async(e) => {
    // await this.resetFilter()
    await this.selectFromMkad(e) 
  }

  selectOnlyPrice = async(e) => {
    // await this.resetFilter()
    await this.selectPriceFrom(e)
  }

  selectOnlyRoadBtn = async(e) => {
    await this.selectRoadBtn(e)
  }

  selectOnlyAreaBtn = async (e) =>{
    await this.selectAreaBtn(e)
  }

  selectOnlyFromMkadBtn = async (e) => {
    await this.selectFromMkadBtn(e)
  }

  selectOnlyPriceBtn = async (e) => {
    await this.selectPriceBtn(e)
  }

  
  render() {
    return (
      <AppState.Provider
        value={{
          villages: this.state.villages,
          villagesPromo: this.state.villagesPromo,
          uniqRoads: this.state.uniqRoads,
          uniqAreas: this.state.uniqAreas,
          uniqPrices: this.state.uniqPrices,
          filteredVillages: this.state.filteredVillages,
          selectedRoads: this.state.selectedRoads,
          selectedAreas: this.state.selectedAreas,
          selectedSafety: this.state.selectedSafety,
          selectedVillageRoads: this.state.selectedVillageRoads,
          selectedVillageTypes: this.state.selectedVillageTypes,
          selectedWaysToGet: this.state.selectedWaysToGet,
          selectedCommunications: this.state.selectedCommunications,
          selectedFromMkad: this.state.selectedFromMkad,
          selectedToMkad: this.state.selectedToMkad,
          selectedPriceFrom: this.state.selectedPriceFrom,
          selectedPriceTo: this.state.selectedPriceTo,
          selectedTypeProperty: this.state.selectedTypeProperty,
          selectedWorldSides: this.state.selectedWorldSides,

          setVillages: this.setVillages,
          setVillagesPromo: this.setVillagesPromo,
          selectTypeProperty: this.selectTypeProperty,
          selectFromMkad: this.selectFromMkad,
          selectPriceFrom: this.selectPriceFrom,
          selectSafety: this.selectSafety,
          selectCommunication: this.selectCommunication,
          selectRoad: this.selectRoad,
          selectArea: this.selectArea,
          selectVillageRoad: this.selectVillageRoad,
          selectVillageType: this.selectVillageType,
          selectWayToGet: this.selectWayToGet,
          selectWorldSide: this.selectWorldSide,
          resetFilter: this.resetFilter,

          selectOnlyVillageType: this.selectOnlyVillageType,
          selectOnlyArea: this.selectOnlyArea,
          selectOnlyRoad: this.selectOnlyRoad,
          selectOnlyDist: this.selectOnlyDist,
          selectOnlyPrice: this.selectOnlyPrice,

          selectOnlyRoadBtn: this.selectOnlyRoadBtn,
          selectOnlyAreaBtn: this.selectOnlyAreaBtn,
          selectOnlyFromMkadBtn: this.selectOnlyFromMkadBtn,
          selectOnlyPriceBtn: this.selectOnlyPriceBtn,

          selectedRoadsBtn: this.state.selectedRoadsBtn,
          selectedAreasBtn: this.state.selectedAreasBtn,
          selectedFromMkadBtn: this.state.selectedFromMkadBtn,
          selectedPriceBtn: this.state.selectedPriceBtn

        }}
      >
        {this.props.children}
      </AppState.Provider>
    )
  }
}

window.state = new AppStateProvider().state
export default AppState 

export { AppStateProvider }
