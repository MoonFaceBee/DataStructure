interface ITreeNode<T> {
	addChild(data: T): void;
	removeChild(index: number): void;
}

export default ITreeNode;