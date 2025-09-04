/*
На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
*/

const listUserUrl = "https://jsonplaceholder.typicode.com/users"
const listAlbumsUrl = "https://jsonplaceholder.typicode.com/albums"
const listPhotoUrl = "https://jsonplaceholder.typicode.com/photos"

const arrayGetList = [
    listUserUrl,
    listAlbumsUrl,
    listPhotoUrl
]

async function getDataFromApi(url) {
  try {
        const list = await fetch(url)
        if (!list.ok) throw new Error(`HTTP error! status: ${list.status}`);
        const body = await list.json();
        return body;
  } catch(error) {
        console.error(error.message);
        throw error;
  }
}

function getDataBulk(...urls) {
  const requests = urls.map(url => getDataFromApi(url));
  return Promise.all(requests);
}

async function processingArrayList() {
    try {
        const [listUser, listAlbums, listPhoto] = await getDataBulk(...arrayGetList)
        const arrayUserListCart = listUser
            .map(userCart => {
            
            const arrayUserAlbum = listAlbums
                .filter(albumCart => albumCart.userId === userCart.id )
                .map(albumCart => {
                    return {
                    nameAlbum: albumCart.title,
                    photoCount: listPhoto
                        .filter(photo => albumCart.id === photo.albumId).length
                    }
                })
            
            return {
                name: userCart.name,
                email: userCart.email,
                phone: userCart.phone,
                company: userCart.company.name,
                albums: arrayUserAlbum
            }
        })
    
    return arrayUserListCart
    } catch (error) {
        console.error('Ошибка обработки:', error);
        throw error;
    }
}

processingArrayList()
    .then(array => array.forEach((userCart, index) => {
            console.log(`${index+1}. name: ${userCart.name}`)
            console.log(`   email: ${userCart.email}`)
            console.log(`   phone: ${userCart.phone}`)
            console.log(`   company: ${userCart.company}`)
            console.log('   albums:')
            userCart.albums.forEach(album => {
                console.log(`     ${album.nameAlbum} (${album.photoCount} photos)`)
            })
            console.log('__________________________________\n')
        }))
    .catch(error => console.error(error))
