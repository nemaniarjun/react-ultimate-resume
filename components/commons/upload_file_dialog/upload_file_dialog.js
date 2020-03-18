"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadFileDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var _file_drop_zone = require("../file_drop_zone/file_drop_zone");

var _contexts = require("../../../utils/context/contexts");

var UploadFileDialogComponent = function UploadFileDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onFileUploaded = _ref.onFileUploaded;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      onFilesUpload = _useContext.onFilesUpload;

  var onDrop = (0, _react.useCallback)(function () {
    return onFilesUpload().then(function (url) {
      onFileUploaded(url);
      return url;
    });
  }, [onFileUploaded]);
  return _react.default.createElement(_core.Dialog, {
    open: open,
    onClose: onClose
  }, _react.default.createElement(_dialog_title.DialogTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "UploadDialog.title",
    defaultMessage: "Upload a file"
  })), _react.default.createElement(_core.DialogContent, null, _react.default.createElement(_file_drop_zone.FileDropZone, {
    onDrop: onDrop
  })), _react.default.createElement(_core.DialogActions, null, _react.default.createElement(_ui.Button, {
    size: "small",
    onClick: onClose
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.close",
    defaultMessage: "Close"
  }))));
};

var UploadFileDialog = UploadFileDialogComponent;
exports.UploadFileDialog = UploadFileDialog;