export interface ITree<T> {
  get height(): number;
}

export interface ITreeNode<T> {
  addChild(data: T): void;
  removeChild(index: number): void;

  get height(): number;
  get depth(): number;
  get degree(): number;
}
