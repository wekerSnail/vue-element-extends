import XEUtils from 'xe-utils'
import { template } from 'xe-ajax-mock'

var idIndex = 100000

// Mock 辅助函数
class Helper {
  constructor (data, ModelVO) {
    this.list = template(data)
    this.ModelVO = ModelVO
  }
  // 获取最新数据、支持排序
  findList (options) {
    let { list } = this
    let { sort = ['updateTime'], order = 'desc', max } = options || {}
    return function (request, response) {
      let rest = list
      let params = request.params
      let sortProp = sort
      let orderPrpo = order
      if (params) {
        let filterProps = XEUtils.keys(params).filter(key => !['sort', 'order'].includes(key) && params[key])
        if (filterProps) {
          rest = rest.filter(data => filterProps.every(key => '' + data[key] === '' + params[key]))
        }
        if (params.order) {
          orderPrpo = params.order
        }
        if (params.sort) {
          sortProp = params.sort.split(',')
        }
      }
      rest = XEUtils.sortBy(list, sortProp)
      if (orderPrpo === 'desc') {
        rest = rest.reverse()
      }
      return max ? rest.slice(0, max) : rest
    }
  }
  // 分页、支持排序
  findPageList (options) {
    let { list } = this
    let { sort = ['updateTime'], order = 'desc', page } = options || {}
    return function (request, response, { pathVariable }) {
      let pageSize = 10
      let currentPage = 1
      let rest = list
      let params = request.params
      let sortProp = sort
      let orderPrpo = order
      if (params) {
        let filterProps = XEUtils.keys(params).filter(key => !['sort', 'order'].includes(key) && params[key])
        if (filterProps) {
          rest = rest.filter(data => filterProps.every(key => String(data[key] || '').indexOf(params[key]) > -1))
        }
        if (params.order) {
          orderPrpo = params.order
        }
        if (params.sort) {
          sortProp = params.sort.split(',')
        }
      }
      if (pathVariable) {
        pageSize = XEUtils.toNumber(pathVariable[page && page.size ? page.size : 'pageSize']) || pageSize
        currentPage = XEUtils.toNumber(pathVariable[page && page.current ? page.current : 'currentPage']) || currentPage
      }
      let totalResult = rest.length
      rest = XEUtils.sortBy(rest, sortProp)
      if (orderPrpo === 'desc') {
        rest = rest.reverse()
      }
      response.body = {
        page: { pageSize, currentPage, totalResult },
        result: rest.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      }
      return response
    }
  }
  // 删除单条
  deleteByPathVariable (options) {
    let { list } = this
    let { key = 'id' } = options || {}
    return function (request, response, { pathVariable }) {
      let rest = []
      if (pathVariable) {
        rest = XEUtils.remove(list, item => item[key] === pathVariable[key])
      }
      response.body = rest
      return response
    }
  }
  // 插入单条
  insertByBody (options) {
    let { list, ModelVO } = this
    let { key = 'id' } = options || {}
    return function (request, response) {
      let result = []
      if (request.body) {
        let updateTime = Date.now()
        let insertRecords = [request.body]
        insertRecords.forEach(data => {
          let rest = Object.assign(new ModelVO(data), { [key]: idIndex++, updateTime, createTime: updateTime })
          result.push(rest)
          list.push(rest)
        })
      }
      return result
    }
  }
  // 更新单条
  updateByBody (options) {
    let { list } = this
    let { key = 'id' } = options || {}
    return function (request, response) {
      let result = []
      if (request.body) {
        let updateTime = Date.now()
        let updateRecords = [request.body]
        updateRecords.forEach(data => {
          let item = list.find(item => item[key] === data[key])
          if (item) {
            XEUtils.destructuring(item, data, { updateTime })
            result.push(item)
          }
        })
      }
      return result
    }
  }
  // 批量保存
  saveListByBody (options) {
    let { list, ModelVO } = this
    let { key = 'id', page } = options || {}
    return function (request, response) {
      let insertRest = []
      let updateRest = []
      let removeRest = []
      if (request.body) {
        let updateTime = Date.now()
        let updateRecords = request.body[page && page.update ? page.update : 'updateRecords'] || []
        let removeRecords = request.body[page && page.remove ? page.remove : 'removeRecords'] || []
        let insertRecords = request.body[page && page.insert ? page.insert : 'insertRecords'] || []
        removeRest = XEUtils.remove(list, item => removeRecords.some(row => row[key] === item[key]))
        updateRecords.forEach(data => {
          let item = list.find(item => item[key] === data[key])
          if (item) {
            XEUtils.destructuring(item, data, { updateTime })
            updateRest.push(item)
          }
        })
        insertRecords.forEach(data => {
          let rest = Object.assign(new ModelVO(data), { [key]: idIndex++, updateTime, createTime: updateTime })
          insertRest.push(rest)
          list.push(rest)
        })
      }
      response.body = { insertRest, updateRest, removeRest }
      return response
    }
  }
  // 树结构 批量保存
  saveTreeListByBody (options) {
    let { list, ModelVO } = this
    let { key = 'id', parentKey = 'parentId', page } = options || {}
    return function (request, response) {
      let insertRest = []
      let updateRest = []
      let removeRest = []
      if (request.body) {
        let updateTime = Date.now()
        let updateRecords = request.body[page && page.update ? page.update : 'updateRecords'] || []
        let removeRecords = request.body[page && page.remove ? page.remove : 'removeRecords'] || []
        let insertRecords = request.body[page && page.insert ? page.insert : 'insertRecords'] || []
        removeRest = XEUtils.remove(list, item => removeRecords.some(row => row[key] === item[key]))
        updateRecords.forEach(data => {
          let item = list.find(item => item[key] === data[key])
          if (item) {
            XEUtils.destructuring(item, data, { updateTime })
            updateRest.push(item)
          }
        })
        let doneList = []
        XEUtils.each(XEUtils.groupBy(insertRecords.filter(item => item[parentKey]), parentKey), (childs, parentId) => {
          let parentItem = insertRecords.find(item => item[key] === parentId)
          if (parentItem) {
            let rest = Object.assign(new ModelVO(parentItem), { [key]: idIndex++, updateTime, createTime: updateTime })
            insertRest.push(rest)
            list.push(rest)
            doneList.push(parentItem)
            childs.forEach(item => {
              let child = Object.assign(new ModelVO(item), { [key]: idIndex++, [parentKey]: rest[key], updateTime, createTime: updateTime })
              insertRest.push(child)
              list.push(child)
              doneList.push(item)
            })
          } else {
            parentItem = list.find(item => '' + item[key] === parentId)
            childs.forEach(item => {
              let child = Object.assign(new ModelVO(item), { [key]: idIndex++, [parentKey]: parentItem[key], updateTime, createTime: updateTime })
              insertRest.push(child)
              list.push(child)
              doneList.push(item)
            })
          }
        })
        insertRecords.filter(item => !doneList.includes(item)).forEach(data => {
          let rest = Object.assign(new ModelVO(data), { [key]: idIndex++, updateTime, createTime: updateTime })
          insertRest.push(rest)
          list.push(rest)
        })
      }
      response.body = { insertRest, updateRest, removeRest }
      return response
    }
  }
}

export default Helper
