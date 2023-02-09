/* eslint-disable no-unused-vars */

module.exports = {
  CourseRole: class {
    constructor(prefix, number, role, veteranRole, color) {
      this.name = prefix + '-' + number;
      this.prefix = prefix;
      this.number = number;
      this.role = role;
      this.veteranRole = veteranRole;
      this.color = color;
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
    archiveCategory(categoryId) {
      const { archiveCategory } = require('./functions');
      // TODO #6 edit this so that it can pass in its own category as a category object
      archiveCategory(this.categoryId);
      return 0;
    }
  },

  OptionalRole: class {
    constructor(roleName, roleId, color, description) {
      this.roleName = roleName;
      this.roleId = roleId;
      this.color = color;
      this.description = description;
    }
  },
};