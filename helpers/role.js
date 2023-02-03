/* eslint-disable no-unused-vars */
class Role {
  constructor(roleName, roleId, color) {
    const funcs = require('./functions');
    this.roleName = roleName;
    this.color = color;
    // If roleId is empty, create a role and assign its ID, else use the given roleId
    this.roleId = roleId ? roleId : funcs.createRole(roleName, color);
  }
}


class CourseRole extends Role {
  constructor(prefix, number, roleId, color) {
    super(number + ' students', roleId, color);
    this.prefix = prefix;
    this.number = number;
  }

  createAndPopulateCategory(video, joint) {
    const funcs = require('./functions');
    const courseName = joint ? this.prefix + ' ' + this.number : this.prefix + ' ' + this.number + ' / ' + joint;
    this.categoryId = funcs.createCategory(courseName + ' - ' + funcs.getSemester());
    funcs.createChannel('announcements-' + this.number, this.categoryId);
    funcs.createChannel('zoom-meeting-info-' + this.number, this.categoryId);
    if (video) {
      funcs.createChannel('how-to-make-a-video', this.categoryId);
      // TODO: #5 Fill with messages
    }
    funcs.createChannel('introduce-yourself', this.categoryId);
    funcs.createChannel('chat', this.categoryId);
  }
}

class VeteranRole extends Role {
  constructor(prefix, number, roleId, color) {
    super(prefix + number, roleId, color);
    this.prefix = prefix;
    this.number = number;
  }

  archiveCategory(categoryId) {
    const { archiveCategory } = require('./functions');
    // TODO #6 edit this so that it can pass in its own category as a category object
    archiveCategory(this.categoryId);
    return 0;
  }
}

class OptionalRole extends Role {
  constructor(roleName, roleId, color, description) {
    super(roleName, roleId);
    this.description = description;
  }
}