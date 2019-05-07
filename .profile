###############################################

# Add `go` to the PATH environment variable
export PATH=$PATH:/usr/local/go/bin

# Add `dart && flutter` to the PATH environment variable
export PATH=$PATH:/usr/lib/dart/bin
export PATH=$PATH:/usr/lib/flutter/bin
# Configuring Flutter to use a mirror site
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
# Add Pub installed executables to the PATH environment variable
export PATH="$PATH":"$HOME/.pub-cache/bin"
