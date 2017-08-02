
const superagent = require('superagent')
const scraper = require('superagent-scraper')
const cheerio = require('cheerio')
const myDb = require('../db')
scraper(superagent)
const composer = myDb.composer
//获取大众点评的美食分类
module.exports.test = async function(){
    let req =  superagent.get('https://www.dianping.com/guangzhou').scraper()
    let res = await req

    let $ = cheerio.load(res.text,{
        decodeEntities: false
    })

    let $categories = $('#index-nav').find('.primary-category[data-key=10] .secondary-category>a[data-key]')
    await composer.beginTransaction()
    try{
        for(let i=0;i<$categories.length;i++){
            let $category = $categories.eq(i)
            await composer.insert({
                table:'food_categories',
                data:{
                    name:$category.text()
                }
            })
        }

        await composer.commit()
    }catch (err){
        await composer.rollback()
        throw err
    }

    return 'done'
}