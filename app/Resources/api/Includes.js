var includes = [
  Ti.UI.create2DMatrix,
  Ti.UI.create3DMatrix,
  Ti.UI.createActivityIndicator,
  Ti.UI.createAlertDialog,
  Ti.UI.createAnimation,
  Ti.UI.createButton,
  Ti.UI.createButtonBar,
  Ti.UI.createCoverFlowView,
  Ti.UI.createDashboardItem,
  Ti.UI.createDashboardView,
  Ti.UI.createEmailDialog,
  Ti.UI.createImageView,
  Ti.UI.createLabel,
  Ti.UI.createListSection,
  Ti.UI.createListView,
  Ti.UI.createMaskedImage,
  Ti.UI.createNotification,
  Ti.UI.createOptionDialog,
  Ti.UI.createPicker,
  Ti.UI.createPickerColumn,
  Ti.UI.createPickerRow,
  Ti.UI.createProgressBar,
  Ti.UI.createRefreshControl,
  Ti.UI.createScrollView,
  Ti.UI.createScrollableView,
  Ti.UI.createSlider,
  Ti.UI.createSwitch,
  Ti.UI.createTab,
  Ti.UI.createTabGroup,
  Ti.UI.createTabbedBar,
  Ti.UI.createTableView,
  Ti.UI.createTableViewRow,
  Ti.UI.createTableViewSection,
  Ti.UI.createTextArea,
  Ti.UI.createTextField,
  Ti.UI.createToolbar,
  Ti.UI.createView,
  Ti.UI.createWebView,
  Ti.UI.createWindow,
  Ti.Media.createAudioPlayer,
  Ti.Media.createAudioRecorder,
  Ti.Media.createItem,
  Ti.Media.createMusicPlayer,
  Ti.Media.createSound,
  Ti.Media.createVideoPlayer,
  Ti.Media.showCamera,
  Ti.Network.Socket.createTCP,
  Ti.Calendar,
  Ti.Stream,
  Ti.Codec,
  Ti.Utils,
  Ti.Contacts.createGroup,
  Ti.Contacts.createPerson,
  Ti.Database.open,
  Ti.Database.execute,
  Ti.Facebook,
  Ti.Map.createAnnotation,
  Ti.Map.createView,
  Ti.Geolocation,
  Ti.Gesture,
  Ti.Accelerometer
];
if (Ti.Platform.osname !== "android"){
  var ios_includes = [Titanium.UI.iPhone.ActivityIndicatorStyle,
    Titanium.UI.iPhone.AlertDialogStyle,
    Titanium.UI.iPhone.AnimationStyle,
    Titanium.UI.iPhone.ListViewCellSelectionStyle,
    Titanium.UI.iPhone.ListViewScrollPosition,
    Titanium.UI.iPhone.ListViewSeparatorStyle,
    Titanium.UI.iPhone.ListViewStyle,
    Titanium.UI.iPhone.NavigationGroup,
    Titanium.UI.iPhone.ProgressBarStyle,
    Titanium.UI.iPhone.RowAnimationStyle,
    Titanium.UI.iPhone.ScrollIndicatorStyle,
    Titanium.UI.iPhone.StatusBar,
    Titanium.UI.iPhone.SystemButton,
    Titanium.UI.iPhone.SystemButtonStyle,
    Titanium.UI.iPhone.SystemIcon,
    Titanium.UI.iPhone.TableViewCellSelectionStyle,
    Titanium.UI.iPhone.TableViewScrollPosition,
    Titanium.UI.iPhone.TableViewSeparatorStyle,
    Titanium.UI.iPhone.TableViewStyle,
    Titanium.UI.iPad.DocumentViewer,
    Titanium.UI.iPad.SplitWindow,
    Titanium.UI.iPad.Popover,
    Titanium.UI.iOS.AdView,
    Titanium.UI.iOS.CoverFlowView,
    Titanium.UI.iOS.DocumentViewer,
    Titanium.UI.iOS.TabbedBar,
    Titanium.UI.iOS.Toolbar
  ];
} else {
  var android_includes = [
    Ti.UI.Android.createProgressIndicator,
    Ti.UI.Android.createSearchView,
    Ti.Android.createBroadcastReceiver,
    Ti.Android.createIntent,
    Ti.Android.createNotification,
    Ti.Android.createPendingIntent,
    Ti.Android.createRemoteViews,
    Ti.Android.createServiceIntent
  ];
}
