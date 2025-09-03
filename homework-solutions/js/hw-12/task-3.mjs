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

const baseUrl = "https://jsonplaceholder.typicode.com"

async function getUserList() {
    try {
        const responseUserList = await fetch(baseUrl + "/users")
        if (!responseUserList.ok) throw new Error(`HTTP error! status: ${responseUserList.status}`);
        const body = await responseUserList.json();
        return body;
    } catch(error) {
        console.error(error.message);
        throw error;
    }
}

async function getAlbumsUser(userId) {
    try {
        const responseUserAlbum = await fetch(baseUrl + "/users/" + userId + "/albums")
        if (!responseUserAlbum.ok) throw new Error(`HTTP error! status: ${responseUserAlbum.status}`);
        const body = await responseUserAlbum.json();
        return body;
    } catch(error) {
        console.error(error.message);
    }  
}

async function getFotoCount(albumId) {
    try {
        const responseAllPhoto = await fetch(baseUrl + "/photos")
        if (!responseAllPhoto.ok) throw new Error(`HTTP error! status: ${responseAllPhoto.status}`);
        const body = await responseAllPhoto.json();
        const arrayPhotoInAlbuum = body.filter(photoCart => photoCart.albumId === albumId)
        const arrayPhotoInAlbuumLength = arrayPhotoInAlbuum.length
        return arrayPhotoInAlbuumLength
    } catch (error) {
        console.error(error.message);
    } 
}

async function getUserListWithAlbums() {
    try {
        const arrayUserList = await getUserList()
        const resultUserList = await arrayUserList.reduce(async (result, userData) => {
            const finalResult = await result
            const userAlbums = await getAlbumsUser(userData.id)
            const userAlbumsWithCount = await userAlbums.reduce(async (result, album) => {
                const newResult = await result
                const photoCount = await getFotoCount(album.id);
                const albumCart = {
                    nameAlbum: album.title,
                    photoCount: photoCount
                }
                newResult.push(albumCart)
                return newResult
            }, Promise.resolve([]))

            const userCart = {
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                company: userData.company.name,
                albums: await userAlbumsWithCount
            }
            finalResult.push(userCart)
            //console.log(userCart)
            return finalResult
        }, Promise.resolve([]))
        return resultUserList
        
    } catch (error) {
        console.error(error.message);
    }
}


async function resultList() {
    getUserListWithAlbums()
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

}

resultList()
