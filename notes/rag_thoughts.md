## RAG Thoughts

we need to use a re-ranker to redistribute and reconsider how each type of file (java, cpp, md, etc) plays into our AI's understanding of the codebase.

https://medium.com/@guptak650/nomic-embeddings-a-cheaper-and-better-way-to-create-embeddings-6590868b438f

this link explains how nomic embeddings rank against open ai and other services. More importantly however, it introduces rerankers as another variable with which to test the embedding performance. 

I think this is the missing piece for how we "teach" our LangChain RAG to treat our Chroma DB documents. 


