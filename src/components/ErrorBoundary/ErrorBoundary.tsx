import React, { ErrorInfo } from 'react';

import './ErrorBoundary.css';

export type State = {
  error?: Error;
  errorInfo?: ErrorInfo;
};

export class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="error-boundary">
          <h2 className="error-boundary__title">
            Sorry. Failed to load the article.
          </h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
