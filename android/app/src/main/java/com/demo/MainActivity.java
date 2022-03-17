package com.demo;
import com.facebook.react.ReactActivityDelegate; // <- add this necessary import
import com.zoontek.rnbootsplash.RNBootSplash;
import com.facebook.react.ReactActivity;
import android.os.Bundle;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
  //RNBootSplash.init(MainActivity.this); 
    return "Demo";
  }
  @Override
protected void onCreate(Bundle savedInstanceState) {
  RNBootSplash.init(MainActivity.this); 
  super.onCreate(null);
}
}
