package br.com.hardfix.tags.service;

import br.com.hardfix.tags.entity.Tag;
import br.com.hardfix.tags.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService implements TagIService {

    @Autowired
    private TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Override
    public void save(Tag tag) throws RuntimeException {

        if (tag == null) {
            throw new RuntimeException("dados vazios");
        } else if (tag.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            tagRepository.save(tag);
        }

    }


    public List<Tag> findAll() throws RuntimeException {
        return tagRepository.findAll();
    }

}