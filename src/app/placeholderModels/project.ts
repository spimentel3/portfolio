function getRandomKittenUrl() {
  return `https://placekitten.com/${Math.round(Math.random() * 300 + 1920)}/${Math.round(Math.random() * 300 + 1080)}`;
}

export interface IProjects {
  projectName: string;
  img: string;
  color: string;
  desc: string;
  tags?: string[];
}

export const placeholderProjects: IProjects[] = [
  {projectName: 'Portfolio 1', img: getRandomKittenUrl()
    , color: '#ff8f00'
    , desc: 'Tempor fusce natoque platea ultrices, vivamus orci ipsum lacinia at orci ipsum lacinia orci ipsum lacinia'
    , tags: ['HTML', 'CSS', 'Leadership', 'Websockets', 'MongoDB', 'SASS', 'Friendship']},
  {projectName: 'Buster Sword 2', img: getRandomKittenUrl()
    , color: '#e91e63'
    , desc: 'Vel condimentum amet natoque semper vestibulum sed quis porta fusce condimentum amet natoque '
    , tags: ['HTML', 'Angular 7', 'Websockets', 'MongoDB', 'SASS', 'Friendship']},
  {projectName: 'Other Project 3', img: getRandomKittenUrl()
    , color: '#4fc3f7'
    , desc: 'Condimentum montes semper dignissim arcu eleifend duis vestibulum et mauris semper dignissim arcu eleifend duis vestibulum'
    , tags: ['Leadership', 'Angular 7', 'Websockets', 'Friendship']},
  {projectName: 'Portfolio 4', img: getRandomKittenUrl()
    , color: '#ff8f00'
    , desc: 'Tempor fusce natoque platea ultrices, vivamus orci Tempor fusce natoque platea ultrices ipsum lacinia at.'
    , tags: ['HTML', 'CSS', 'Leadership', 'Angular 7', 'Friendship']},
  {projectName: 'Buster Sword 5', img: getRandomKittenUrl()
    , color: '#e91e63'
    , desc: 'Vel condimentum amet quis porta natoque semper vestibulum sed quis porta fusce.'
    , tags: ['HTML', 'CSS', 'Angular 7', 'MongoDB', 'SASS', 'Friendship']},
  {projectName: 'Other Project 6', img: getRandomKittenUrl()
    , color: '#4fc3f7'
    , desc: 'Condimentum semper dignissim arcu eleifend duis montes et mauris semper dignissim arcu eleifend duis vestibulum!'
    , tags: ['HTML', 'CSS', 'Angular 7', 'Websockets', 'SASS', 'Friendship']},
  {projectName: 'Portfolio 7', img: getRandomKittenUrl()
    , color: '#ff8f00'
    , desc: 'Tempor fusce natoque orci ipsum lacinia platea ultrices, vivamus orci ipsum lacinia at.'
    , tags: ['HTML', 'Leadership', 'Angular 7', 'SASS', ]},
  {projectName: 'Buster Sword 8', img: getRandomKittenUrl()
    , color: '#e91e63'
    , desc: 'Vel condimentum amet natoque semper vestibulum sed quis porta fusce.'
    , tags: ['HTML', 'Angular 7', 'Websockets', 'MongoDB', 'SASS' ]},
  {projectName: 'Other Project 9', img: getRandomKittenUrl()
    , color: '#4fc3f7'
    , desc: 'Condimentum montes et mauris semper dignissim montes et mauris semper arcu eleifend duis vestibulum!'
    , tags: ['CSS', 'Leadership', 'MongoDB', 'SASS', 'Friendship']},
];
