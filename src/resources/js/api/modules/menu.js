import resource from "../resource";
import endpoint from "../endpoint";
import QueryString from "../query-string";

export default {
  browseItemByKey(data) {
    let ep = endpoint.menu.browseItemByKey;
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  browse(data = {}) {
    let ep = endpoint.menu.browse;
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  read(data) {
    let ep = endpoint.menu.read;
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  edit(data) {
    return resource.put(endpoint.menu.edit, data);
  },

  add(data) {
    return resource.post(endpoint.menu.add, data);
  },

  delete(data) {
    let paramData = {
      data: data,
    };
    return resource.delete(endpoint.menu.delete, paramData);
  },

  browseItem(data) {
    let ep = endpoint.menu.browseItem;
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },

  arrangeItems(data) {
    return resource.put(endpoint.menu.arrangeItems, data);
  },

  readItem(data) {
    let ep = ep.menu.readItem;
    let qs = QueryString(data);
    let url = endpoint + qs;
    return resource.get(url);
  },

  editItem(data) {
    return resource.put(endpoint.menu.editItem, data);
  },

  editItemOrder(data) {
    return resource.put(endpoint.menu.editItemOrder, data);
  },

  addItem(data) {
    return resource.post(endpoint.menu.addItem, data);
  },

  deleteItem(data) {
    let paramData = {
      data: data,
    };
    return resource.delete(endpoint.menu.deleteItem, paramData);
  },

  getItemPermissions(data = {}) {
    let ep = endpoint.menu.itemPermissions;
    let qs = QueryString(data);
    let url = ep + qs;
    return resource.get(url);
  },
  setItemPermissions(data) {
    return resource.put(endpoint.menu.itemPermissions, data);
  },
};
